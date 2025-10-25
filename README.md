
# Markov Text Generator

A simple Node.js command-line tool that generates random text using a **Markov chain algorithm**.  
This project reads text from either a **local file** or a **URL**, then produces new randomized sentences that mimic the style of the original input.

---

## Features

- Generates text using a Markov chain model.
- Accepts input from both **text files** and **URLs**.
- Handles errors for invalid paths and connection issues.
- Outputs randomized text directly to the console.
- Uses **Axios** for fetching data from the web.

---

## Project Structure

```
.
├── eggs.txt           # Sample input text
├── makeText.js        # Command-line entry point
├── markov.js          # Markov Machine class and logic
├── package.json       # Project dependencies
└── package-lock.json  # Lockfile for dependencies
```

---

## Installation and Setup

### 1. Clone the repository
```bash
git clone https://github.com/<your-username>/<your-repo-name>.git
cd <your-repo-name>
```

### 2. Install dependencies
```bash
npm install
```

---

## Usage

Run the program from the command line using either a file or URL as input:

### From a local file:
```bash
node makeText.js file eggs.txt
```

### From a URL:
```bash
node makeText.js url https://www.gutenberg.org/files/11/11-0.txt
```

The program will print the generated text directly to your terminal.

---

## Example Output

```
I would not eat them in a tree I could not with a goat not in a car you see
I would not like green eggs and ham
```

---

## Technologies Used

- **Node.js**
- **Axios** (for fetching web content)
- **File System (fs)** (for reading local files)

---

## Error Handling

If there is a problem reading a file or fetching from a URL, a clear error message is displayed:

```
Error reading file: ENOENT: no such file or directory
Error fetching URL: Request failed with status code 404
```

---

## Author

[Jonathan Federico Martinez](https://www.linkedin.com/in/jonathan-martinez-a9970b1a6)  
Full-Stack MERN Developer • [GitHub](https://github.com/l3ofspades)
