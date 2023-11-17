// components/TodoItem.js
const TodoItem = ({ index, description, completed, uniqueText }) => {
  return (
    <div className="flex items-center mb-4">
      <div className={`w-8 h-8 rounded-full border-2 flex justify-center items-center ${completed ? 'bg-green border-black' : 'border-b-black'}`}>
        {completed ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <span className="text-black font-semibold">{index}</span>
        )}
      </div>
      <div className="ml-2">
        <h2 className={`${completed ? 'text-gray-500 line-through' : 'text-black'}`}>{description}</h2>
        <p>{uniqueText}</p>
      </div>
    </div>
  );
};

export default TodoItem;