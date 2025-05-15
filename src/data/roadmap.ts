import { Session } from '../types';

export const roadmapData: Session[] = [
  {
    id: 0,
    title: "Introduction to UI/UX and Web Interface Design",
    description: "Understanding UI/UX fundamentals and design principles with Figma",
    active: true,
    completed: false,
    modules: [
      {
        title: "Understanding UI/UX - Beyond Just Looks",
        description: "Focuses on the appearance of products and overall functionality",
        details: [
          "UI (User Interface): Focuses on the appearance of the product — layout, colors, typography, buttons, etc.",
          "UX (User Experience): Focuses on the functionality and overall feel — user journey, satisfaction, efficiency.",
          "Examples: A simple search bar (UI) combined with fast, accurate results (UX) = great experience.",
          "Goal: To distinguish between UI and UX and understand how they work together."
        ]
      },
      {
        title: "Design Fundamentals - From Points to Composition",
        description: "Learn the basic elements and principles of visual design",
        details: [
          "Design Elements: Point, Line, Shape, Space, Texture, Value/Shade",
          "Design Principles: Alignment, Contrast, Repetition, Proximity",
          "Goal: Understand how to use visual language to guide the user's attention."
        ]
      },
      {
        title: "Emotion in Design - Communicating Through Color",
        description: "Explore how color psychology influences user perception",
        details: [
          "Color Psychology: Red (passion, danger), Blue (trust, calm), Green (growth, health), Yellow (optimism, alertness)",
          "Other Concepts: Complementary & Analogous Colors, Contrast for accessibility, Cultural sensitivity in color use",
          "Goal: Learn to use colors not just for decoration but to guide mood and behavior."
        ]
      },
      {
        title: "Interface Essentials – UI Components",
        description: "Discover common user interface components",
        details: [
          "Common Components: Buttons, Input Fields, Cards, Modals, Navigation Bars, Icons",
          "Patterns: Responsive Layouts (Grids, Flexbox thinking), Hierarchical Structures (Header, Sidebar, Footer)",
          "Goal: Recognize and use standard UI elements effectively to build familiar and intuitive layouts."
        ]
      },
      {
        title: "From Idea to Interface – Designing in Figma",
        description: "Practice designing user interfaces in Figma",
        details: [
          "Figma Basics: Frames and Artboards, Grids and Layout Constraints, Auto Layout, Components and Variants, Typography and Style Guide",
          "Hands-on Practice: Design a login screen or simple landing page, Use a UI kit or create from scratch",
          "Goal: Build a practical interface using the knowledge acquired in previous modules."
        ]
      }
    ]
  },
  {
    id: 1,
    title: "CSS Formatting",
    description: "Learn positioning, flexbox, grid, colors and fonts",
    completed: false,
    modules: [
      {
        title: "CSS Box Model & Layout Fundamentals",
        description: "Master the foundation of CSS layout techniques",
        details: [
          "Understanding the box model: margin, border, padding, content",
          "Display properties: block, inline, inline-block",
          "Positioning: static, relative, absolute, fixed, sticky",
          "Goal: Build a solid foundation for creating structured layouts"
        ]
      },
      {
        title: "Flexbox Layout System",
        description: "Create flexible and responsive layouts",
        details: [
          "Flex container properties: display, flex-direction, justify-content, align-items",
          "Flex item properties: flex-grow, flex-shrink, flex-basis",
          "Building navigation bars, card layouts, and centering content",
          "Goal: Master one-dimensional layouts for components and rows/columns"
        ]
      },
      {
        title: "CSS Grid Layout",
        description: "Learn two-dimensional layout techniques",
        details: [
          "Creating grid containers and defining grid templates",
          "Placing items with grid-column and grid-row",
          "Building responsive dashboard and card layouts",
          "Goal: Design complex two-dimensional layouts with precision"
        ]
      },
      {
        title: "Typography & Color Theory",
        description: "Master text styling and color combinations",
        details: [
          "Font properties: family, size, weight, style, line-height",
          "Web fonts and font optimization",
          "Color systems: RGB, HSL, hexadecimal",
          "Creating accessible and harmonious color palettes",
          "Goal: Create visually appealing and readable designs"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Responsive CSS",
    description: "Use CSS media queries, transitions and animations",
    completed: false,
    modules: [
      {
        title: "Responsive Design Fundamentals",
        description: "Create layouts that work on any device",
        details: [
          "Mobile-first design approach",
          "Media queries and breakpoints",
          "Viewport meta tag and responsive units (%, em, rem, vh, vw)",
          "Goal: Build websites that adapt seamlessly to any screen size"
        ]
      },
      {
        title: "CSS Transitions",
        description: "Add smooth state changes to elements",
        details: [
          "Transition properties: property, duration, timing-function, delay",
          "Creating hover effects and state transitions",
          "Performance considerations",
          "Goal: Enhance user experience with subtle motion feedback"
        ]
      },
      {
        title: "CSS Animations",
        description: "Create keyframe-based animations",
        details: [
          "Animation properties and @keyframes",
          "Timing functions and easing",
          "Creating loading indicators, notifications, and UI feedback",
          "Goal: Add engaging motion to interfaces that guide users"
        ]
      },
      {
        title: "Advanced Techniques",
        description: "Master modern CSS capabilities",
        details: [
          "CSS variables (custom properties)",
          "Calc() function and dynamic calculations",
          "Scroll-based effects and animations",
          "Goal: Leverage the full power of modern CSS"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "JavaScript Basics",
    description: "Manipulate the DOM, interact with buttons, events, etc.",
    completed: false,
    modules: [
      {
        title: "JavaScript Fundamentals",
        description: "Learn the core language concepts",
        details: [
          "Variables, data types, and operators",
          "Functions, scope, and closures",
          "Control flow: conditionals and loops",
          "Objects, arrays, and working with data",
          "Goal: Gain a solid foundation in JavaScript programming"
        ]
      },
      {
        title: "DOM Manipulation",
        description: "Interact with HTML and CSS through JavaScript",
        details: [
          "Selecting elements using various methods",
          "Modifying content, attributes, and styles",
          "Creating, inserting, and removing elements",
          "Traversing the DOM tree",
          "Goal: Dynamically modify web pages through JavaScript"
        ]
      },
      {
        title: "Event Handling",
        description: "Create interactive user experiences",
        details: [
          "Adding event listeners to elements",
          "Mouse, keyboard, form, and custom events",
          "Event propagation: bubbling and capturing",
          "Removing event listeners and memory management",
          "Goal: Build responsive interfaces that react to user input"
        ]
      },
      {
        title: "Browser APIs",
        description: "Leverage built-in browser capabilities",
        details: [
          "Working with Fetch API for data retrieval",
          "Using localStorage and sessionStorage",
          "Handling timers with setTimeout and setInterval",
          "Implementing form validation",
          "Goal: Enhance websites with powerful browser features"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Matrix Blog Project - Part 1",
    description: "Apply learned skills to build a blog project",
    completed: false,
    modules: [
      {
        title: "Project Setup and Planning",
        description: "Initialize and plan the Matrix Blog project",
        details: [
          "Setting up the project repository",
          "Creating wireframes and design mockups",
          "Establishing project requirements and features",
          "Planning the component structure",
          "Goal: Create a solid foundation for efficient development"
        ]
      },
      {
        title: "Responsive Layout Implementation",
        description: "Build the core structure of the blog",
        details: [
          "Creating the navigation and header components",
          "Implementing responsive grid layouts for posts",
          "Designing the homepage with featured content",
          "Building footer and sidebar components",
          "Goal: Establish a responsive foundation for the blog"
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Matrix Blog Project - Part 2",
    description: "Complete and polish the blog project",
    completed: false,
    modules: [
      {
        title: "Content and Features",
        description: "Implement core blog functionality",
        details: [
          "Creating blog post components with dynamic content",
          "Implementing category and tag filtering",
          "Building search functionality",
          "Adding pagination for post lists",
          "Goal: Create a fully functional content delivery system"
        ]
      },
      {
        title: "Interactions and Polish",
        description: "Enhance the user experience with animations",
        details: [
          "Adding transition animations between pages",
          "Implementing hover effects and interactive elements",
          "Creating loading states and feedback",
          "Optimizing performance and accessibility",
          "Goal: Deliver a polished, professional blog experience"
        ]
      },
      {
        title: "Project Completion",
        description: "Finalize and deploy the Matrix Blog",
        details: [
          "Testing across devices and browsers",
          "Fixing bugs and addressing edge cases",
          "Optimizing performance and assets",
          "Deploying to a hosting platform",
          "Goal: Launch a production-ready blog website"
        ]
      }
    ]
  }
];