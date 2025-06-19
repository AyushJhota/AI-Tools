import React from 'react';
import { Link } from 'react-router-dom';
import { aiTools } from '../data/aiTools';

const AIToolList = () => {
  return (
    <div>
      <h2>AI Tools</h2>
      <ul className="ai-tool-list">
        {aiTools.map((tool) => (
          <li key={tool.id}>
            <div className="tool-info">
              <h3>{tool.name}</h3>
              <p>{tool.category}</p>
            </div>
            <Link to={`/tool-details/${tool.id}`}>
              <button className="read-more-button">Read More</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AIToolList;
