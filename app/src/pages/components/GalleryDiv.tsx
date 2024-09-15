import React, { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import logo from "../../assets/iwih_logo.png";
import ananya from "../../assets/ananya.png";
import duc from "../../assets/Duc.jpg";
import team from "../../assets/IwiH_Team.jpg";

// Type for each item
type ItemProps = {
  itemId: string;
  title: string;
  imageSrc: string;
  onClick: () => void;
};

// ScrollItem component with a button containing an image
function ScrollItem({ itemId, title, imageSrc, onClick }: ItemProps) {
  return (
    <div
      className="scroll-item"
      style={{ width: "160px", padding: "10px", textAlign: "center" }}
    >
      <button onClick={onClick} style={{ width: "100%", padding: "10px" }}>
        <img
          src={imageSrc}
          alt={title}
          style={{ width: "100%", height: "100px", objectFit: "cover" }}
        />
        <div>{title}</div>
      </button>
    </div>
  );
}

// Team
function Teamdesc() {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1>Invisible Women in Health</h1>
      <p>
        Invisible Women in Health is a initiative to bring the efforts of women
        in healthcare to light. Research is often cluttered with bias and does
        not account for the research and achievements that women do. IWiH aims
        to use AI for the good for women in healthcare.
      </p>
      <img
        src={team}
        alt="IWiH Team"
        style={{
          maxWidth: "100%",
          height: "auto",
          display: "block",
          margin: "0 auto",
          borderRadius: "8px", // Optional: for rounded corners
        }}
      />
    </div>
  );
}

// Component 2
function Ananyadesc() {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1>Team Member: Ananya</h1>
      <p>
        Hi! I'm Ananya and I worked on the front-end and design of the IWiH
        project! I am a 2/4 CS Major at Stevens Institute of Technology and I
        love to paint in my free time! I'm super inspired by Claude Monet and
        the Impressionism movement so I paint pop culture icons and references
        often in that style!
      </p>
    </div>
  );
}

function Ducdesc() {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h1>Team Member: Duc</h1>
      <p>Add in your desc here!</p>
    </div>
  );
}

// GalleryDiv component with unique click functions for each button
function GalleryDiv() {
  // State to track which component to display
  const [selectedComponent, setSelectedComponent] =
    useState<JSX.Element | null>(null);

  // Define unique click handlers for each button
  const handleClick1 = () => setSelectedComponent(<Teamdesc />);
  const handleClick2 = () => setSelectedComponent(<Ananyadesc />);
  const handleClick3 = () => setSelectedComponent(<Ducdesc />); // Reset or set to any default component
  const handleClick4 = () => setSelectedComponent(null); // Reset or set to any default component
  const handleClick5 = () => setSelectedComponent(null); // Reset or set to any default component

  // Array of 5 items with images and unique click handlers
  const items = [
    {
      itemId: "item-1",
      title: "IWiH",
      imageSrc: logo,
      onClick: handleClick1, // Displays Component 1
    },
    {
      itemId: "item-2",
      title: "Ananya",
      imageSrc: ananya,
      onClick: handleClick2, // Displays Component 2
    },
    {
      itemId: "item-3",
      title: "Duc",
      imageSrc: duc,
      onClick: handleClick3, // Example click handler
    },
    {
      itemId: "item-4",
      title: "Button 4",
      imageSrc: "https://via.placeholder.com/150",
      onClick: handleClick4, // Example click handler
    },
    {
      itemId: "item-5",
      title: "Button 5",
      imageSrc: "https://via.placeholder.com/150",
      onClick: handleClick5, // Example click handler
    },
  ];

  return (
    <div style={{ width: "600px", margin: "0 auto" }}>
      <ScrollMenu>
        {items.map(({ itemId, title, imageSrc, onClick }) => (
          <ScrollItem
            key={itemId}
            itemId={itemId}
            title={title}
            imageSrc={imageSrc}
            onClick={onClick} // Pass the unique function here
          />
        ))}
      </ScrollMenu>

      {/* Conditionally render the selected component */}
      {selectedComponent}
    </div>
  );
}

export default GalleryDiv;
