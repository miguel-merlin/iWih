import React, { useState } from "react";
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";
import logo from "../../assets/iwih_logo.png";
import ananya from "../../assets/ananya.png";
import IwiH from "./IwihAbout";
import IWiHAbout from "./IwihAbout";

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

// Component that will be displayed under the scrollbar based on button clicks
function DisplayComponent({ title }: { title: string }) {
  return (
    <div
      style={{
        marginTop: "20px",
        padding: "20px",
        border: "1px solid #ddd",
        backgroundColor: "#f9f9f9",
      }}
    >
      <h2>Displaying Content for: {title}</h2>
      <p>This is custom content for "{title}".</p>
    </div>
  );
}

// GalleryDiv component with unique click functions for each button
function GalleryDiv() {
  const [selectedTitle, setSelectedTitle] = useState<string | null>(null);

  // Define unique click handlers for each button
  const handleClick1 = () => setSelectedTitle("IWiH");
  const handleClick2 = () => setSelectedTitle("Ananya");
  const handleClick3 = () => setSelectedTitle("Button 3");
  const handleClick4 = () => setSelectedTitle("Button 4");
  const handleClick5 = () => setSelectedTitle("Button 5");

  // Array of 5 items with images and unique click handlers
  const items = [
    {
      itemId: "item-1",
      title: "IWiH",
      imageSrc: logo,
      onClick: handleClick1, // Unique function
    },
    {
      itemId: "item-2",
      title: "Ananya",
      imageSrc: ananya,
      onClick: handleClick2, // Unique function
    },
    {
      itemId: "item-3",
      title: "Button 3",
      imageSrc: "https://via.placeholder.com/150",
      onClick: handleClick3, // Unique function
    },
    {
      itemId: "item-4",
      title: "Button 4",
      imageSrc: "https://via.placeholder.com/150",
      onClick: handleClick4, // Unique function
    },
    {
      itemId: "item-5",
      title: "Button 5",
      imageSrc: "https://via.placeholder.com/150",
      onClick: handleClick5, // Unique function
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

      {/* Conditionally render the DisplayComponent based on selected title */}
      {selectedTitle && <IWiHAbout />}
    </div>
  );
}

export default GalleryDiv;
