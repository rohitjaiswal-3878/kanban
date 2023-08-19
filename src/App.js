import { useEffect, useState } from "react";
import "./App.css";
import Board from "./Components/Board";
import DisplayButton from "./Components/DisplayButton";
import axios from "axios";

function App() {
  const [data, setData] = useState();
  const [selectedPriority, setSelectedPriority] = useState("status"); // Default priority value

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const response = await axios.get(
          "https://api.quicksell.co/v1/internal/frontend-assignment"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchAPI();
  }, []);

  if (!data) {
    return <p>Loading...</p>;
  }

  const ticketsByStatus = data.tickets.reduce((acc, ticket) => {
    const status = ticket.status;
    if (!acc[status]) {
      acc[status] = [];
    }
    acc[status].push(ticket);
    return acc;
  }, {});

  const ticketsByPriority = data.tickets.reduce((acc, ticket) => {
    const priority = ticket.priority;
    if (!acc[priority]) {
      acc[priority] = [];
    }
    acc[priority].push(ticket);
    return acc;
  }, {});

  const ticketsByUser = data.tickets.reduce((acc, ticket) => {
    const userId = ticket.userId;
    if (!acc[userId]) {
      acc[userId] = [];
    }
    acc[userId].push(ticket);
    return acc;
  }, {});

  function handlePriorityChange(priority) {
    setSelectedPriority(priority);
  }
  console.log(data);

  return (
    <div className="app">
      <div className="app_navbar">
        <DisplayButton onPriorityChange={handlePriorityChange} />
      </div>
      <div className="app_outer">
        <div className="app_board">
          {selectedPriority === "status"
            ? Object.keys(ticketsByStatus).map((status) => (
                <Board
                  key={status}
                  status={status}
                  tickets={ticketsByStatus[status]}
                  users={data.users}
                />
              ))
            : selectedPriority === "priority"
            ? Object.keys(ticketsByPriority).map((priority) => (
                <Board
                  key={priority}
                  grouping={priority}
                  tickets={ticketsByPriority[priority]}
                  users={data.users}
                />
              ))
            : Object.keys(ticketsByUser).map((userId) => (
                <Board
                  key={userId}
                  userid={userId}
                  tickets={ticketsByUser[userId]}
                  users={data.users}
                />
              ))}
        </div>
      </div>
    </div>
  );
}

export default App;
