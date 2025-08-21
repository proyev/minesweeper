# Minesweeper

A modern, responsive implementation of the classic Minesweeper puzzle game built with React. Features a sleek dark theme, smooth animations, and all the traditional gameplay mechanics you know and love.

## ✨ Features

- **Classic Minesweeper Gameplay**: 8×9 grid with 10 hidden mines
- **Interactive Controls**: Left-click to reveal, right-click to flag
- **Smart Auto-Reveal**: Automatically reveals adjacent empty cells
- **Real-Time Timer**: Track your solving speed
- **Bomb Counter**: Keep track of remaining mines
- **Visual Feedback**: Animated status indicators and hover effects
- **Responsive Design**: Optimized for different screen sizes
- **Modern UI**: Dark theme with custom typography and glowing effects
- **Game States**: Win, lose, and progress tracking
- **Reset Functionality**: Start fresh anytime

## 🎮 How to Play

### Controls

- **Left Click**: Reveal a cell
- **Right Click**: Flag/unflag a suspected mine
- **Reset Button**: Start a new game (click the emoji)

### Objective

1. **Clear all safe cells** without hitting a mine
2. **Flag all 10 mines** correctly
3. **Complete as quickly as possible** for the best time

### Game Elements

- **Numbers**: Show how many mines are adjacent to that cell
- **Flags**: Mark cells you suspect contain mines
- **Empty cells**: Safe areas with no adjacent mines
- **Mines**: Game over if revealed!

## �📁 Project Structure

```
minesweeper/
│
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA configuration
│   ├── robots.txt          # Search engine directives
│   └── favicon.ico         # App icon
│
├── src/
│   ├── components/
│   │   └── Game.js         # Game presentation component
│   ├── containers/
│   │   └── GameContainer.js # Game logic and state management
│   ├── App.js              # Main application component
│   ├── App.css             # Application styling
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   ├── fired.svg           # Mine explosion icon
│   ├── target.svg          # Flag icon
│   └── logo.svg            # React logo
│
├── package.json            # Dependencies and scripts
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd minesweeper
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser** to `http://localhost:3000`

### Build for Production

```bash
npm run build
# or
yarn build
```

This creates an optimized production build in the `build` folder.

## �️ Technology Stack

- **React 17.0.2**: Core framework with hooks
- **Create React App**: Development and build tooling
- **CSS3**: Custom styling with animations and gradients
- **Google Fonts**: Zen Tokyo Zoo typography
- **SVG Icons**: Custom mine and flag graphics
- **Jest & React Testing Library**: Testing framework (configured)

## 🧠 Game Logic

### Field Generation

- **72 cells** arranged in an 8×9 grid
- **10 mines** randomly distributed
- **Adjacent counts** calculated for each safe cell

### Game States

```javascript
// Cell states
"M"; // Hidden mine
"0-8"; // Number of adjacent mines
"MO"; // Revealed mine (game over)
"0O"; // Revealed safe cell
"MF"; // Flagged mine
"0F"; // Flagged safe cell
```

### Status Indicators

- **🙂** - Ready to play
- **😄** - Making progress (2+ mines found)
- **😜** - Doing well (4+ mines found)
- **😎** - Almost there (6+ mines found)
- **🤩** - Victory!
- **🤯** - Game over

### Auto-Reveal Algorithm

When a cell with 0 adjacent mines is clicked, the game automatically reveals all connected empty cells using a recursive flood-fill algorithm.
