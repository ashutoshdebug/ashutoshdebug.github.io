import React, { useEffect, useState } from "react";
import "./Terminal.css"; // ✅ CSS import

export const AnimatedSpan = ({ children, delay = 0, className = "", ...props }) => (
  <div
    {...props}
    className={`animated-span ${className}`}
    style={{
      opacity: 0,
      transform: "translateY(-5px)",
      animation: `fadeInUp 0.3s ease forwards`,
      animationDelay: `${delay}ms`,
    }}
  >
    {children}
  </div>
);

export const TypingAnimation = ({
  children,
  className = "",
  duration = 60,
  delay = 0,
  as: Component = "span",
  ...props
}) => {
  if (typeof children !== "string") {
    throw new Error("TypingAnimation: children must be a string.");
  }

  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;

    let i = 0;
    const typingEffect = setInterval(() => {
      if (i < children.length) {
        setDisplayedText(children.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingEffect);
      }
    }, duration);

    return () => clearInterval(typingEffect);
  }, [children, duration, started]);

  return (
    <Component className={`typing-text ${className}`} {...props}>
      {displayedText}
    </Component>
  );
};

export const Terminal = ({ children, className = "" }) => {
  return (
    <div className={`terminal ${className}`}>
      <div className="terminal-header">
        <div className="dot red" />
        <div className="dot yellow" />
        <div className="dot green" />
      </div>
      <pre className="terminal-content">
        <code>{children}</code>
      </pre>
    </div>
  );
};
