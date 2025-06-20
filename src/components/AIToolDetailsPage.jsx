import React from 'react';
import { useParams } from 'react-router-dom';
import { aiTools } from '../data/aiTools';

const AIToolDetailsPage = () => {
  const { id } = useParams();
  const tool = aiTools.find(tool => tool.id === id);

  if (!tool) {
    return <div style={{ color: 'red', fontSize: '20px', textAlign: 'center' }}>Error: AI Tool not found.</div>;
  }

  console.log(tool); // Log the tool object


  return (
    <div className="ai-tool-details">
      <div className="ai-tool-details-header">
        <div className="ai-tool-details-header-left">
          <h2>{tool.name}</h2>
        </div>
        <div className="ai-tool-details-header-right">
          {tool.link && (
            <a
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="visit-site-button"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>

      <div className="tool-details-content">
        <p><strong>Description:</strong> {tool.description}</p>
        <div className="tool-metadata">
          <p>
            <span className="metadata-label"><strong>Category:</strong></span>
            <span className="department-label">{tool.category}

</span>
          </p>
          <p><span className="metadata-label"><strong>Use Cases:</strong></span></p> {/* Label for the use cases list */}
          <ul className="use-cases-list"> {/* Unordered list for use cases */}
            {tool.useCases && tool.useCases.map((useCase, index) => (
              <li key={index}>{useCase}</li> // Render each use case as a list item
            ))}
          </ul>
          <div> {/* Use a div instead of a p for this section */}
  <p><span className="metadata-label"><strong>Additional Details:</strong></span></p> {/* Put the label in its own p or div */}
  {tool.additionalDetails && (
    <div dangerouslySetInnerHTML={{ __html: tool.additionalDetails }} />
  )}
</div>


        </div>
      </div>
    </div>
  );
};

export default AIToolDetailsPage;