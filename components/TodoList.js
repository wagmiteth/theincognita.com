// components/TodoList.js
import TodoItem from "./TodoItem";

const TodoList = ({ tasks }) => {
  const testTasks = [
    {
      id: 1,
      description: "Claiming 1 commandment, brand and identity.",
      completed: true,
      uniqueText:
        "Establish domains and socials, website 1.0 and community Discord",
    },
    {
      id: 2,
      description: "Website 2.0",
      completed: true,
      uniqueText: "Upgraded design & sorting mechanisms for nodes",
    },
    {
      id: 3,
      description: "Build recognition",
      completed: false,
      uniqueText: "Communicate with nodes, create website and social content",
    },
    {
      id: 4,
      description: "1st edition NFT drop",
      completed: false,
      uniqueText: "20 NFTs at 0.1 ETH each",
    },
    {
      id: 5,
      description: "Community",
      completed: false,
      uniqueText: "Meetups",
    },
    {
      id: 6,
      description: "Scale",
      completed: false,
      uniqueText: "Community token and bounties",
    },
    { id: 7, description: "Crowdfund funds", completed: false, uniqueText: "" },
    {
      id: 8,
      description: "Website 3.0",
      completed: false,
      uniqueText: "WEB3 login and live integrated node stats",
    },
    // ... other tasks
  ];

  return (
    <div>
      {testTasks.map((task, index) => (
        <TodoItem
          key={task.id}
          index={index + 1}
          description={task.description}
          completed={task.completed}
          uniqueText={task.uniqueText} // pass the unique text here
        />
      ))}
    </div>
  );
};

export default TodoList;
