
import React from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  withAccent?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = "center",
  withAccent = true,
}) => {
  const getAlignment = () => {
    switch (alignment) {
      case "left":
        return "text-left";
      case "right":
        return "text-right";
      default:
        return "text-center";
    }
  };

  return (
    <div className={`mb-12 ${getAlignment()}`}>
      <h2 className="heading-lg text-gray-900">{title}</h2>
      {withAccent && (
        <div
          className={`h-1 w-24 bg-gradient-to-r from-grain-blue-500 to-grain-green-500 mt-4 mb-6 rounded ${
            alignment === "center" ? "mx-auto" : alignment === "right" ? "ml-auto" : ""
          }`}
        ></div>
      )}
      {subtitle && <p className="text-lg text-gray-700 mt-4">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
