<div align="center">

# TypeScript Bootcamp - Chai aur Code

### My TypeScript learning journey from zero to production
### following Hitesh Choudhary's *Chai aur TypeScript* series

<br/>

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

[![Status](https://img.shields.io/badge/Status-Completed-success?style=flat-square)](https://github.com/prabhatyadav4)
[![Course](https://img.shields.io/badge/Course-Chai%20aur%20Code-orange?style=flat-square)](https://youtube.com/playlist?list=PLu71SKxNbfoBkkr8lblqtsJvxrw3j1tWC)
[![Instructor](https://img.shields.io/badge/Instructor-Hitesh%20Choudhary-red?style=flat-square)](https://github.com/hiteshchoudhary)
[![Duration](https://img.shields.io/badge/Duration-26%20days-blue?style=flat-square)](https://github.com/prabhatyadav4/typescript-bootcamp)

</div>

---

## 🎯 About

This repository contains all my notes, practice code, and projects built while completing the **Chai aur TypeScript** series by **Hitesh Choudhary**. Coming from JavaScript and React, this series helped me add strong typing, OOP patterns, and production-ready TypeScript to my skill set.

> **Started:** August 16, 2026 &nbsp;|&nbsp; **Completed:** September 11, 2026 &nbsp;|&nbsp; **Duration:** 26 days
> **Prerequisites:** JavaScript · React basics

---

## 🗂️ Repository Structure

```
typescript-bootcamp/
│
├── src/                          # Core TypeScript concepts
│   ├── 01_index.ts               # TS setup & hello world
│   ├── 02_typesInTS.ts           # Primitive types & annotations
│   ├── 03_unionsAndAny.ts        # Union types & any
│   ├── 04_typeNarrowing.ts       # Type narrowing & guards
│   ├── 05_advanceTypes.ts        # Advanced type patterns
│   ├── 06_interfaces.ts          # Interfaces basics
│   ├── 07_object.ts              # Typed objects
│   ├── 08_function.ts            # Typed functions
│   ├── 09_arrayTypesAndEnum.ts   # Arrays, tuples & enums
│   ├── 10_oop.ts                 # OOP with TypeScript
│   ├── 11_interface.ts           # Advanced interfaces
│   ├── 12_generics.ts            # Generic types & functions
│   ├── 13_webReq.ts              # Web requests with types
│   └── 14_fetchReq.ts            # Typed fetch requests
│
├── react-ts/                     # TypeScript + React project
│   └── src/
│       ├── components/
│       │   ├── Card.tsx          # Typed card component
│       │   ├── ChaiCard.tsx      # Custom chai card
│       │   ├── ChaiList.tsx      # List with typed props
│       │   ├── Counter.tsx       # Typed state counter
│       │   └── OrderFrom.tsx     # Typed form component
│       ├── hooks/
│       │   └── useFetch.ts       # Custom typed hook
│       ├── App.tsx
│       ├── main.tsx
│       └── types.ts              # Shared type definitions
│
└── README.md
```

---

## 📚 Topics Completed

### Fundamentals
- [x] TypeScript Setup & `tsconfig.json` configuration
- [x] Primitive Types — `string`, `number`, `boolean`
- [x] Type Inference & Annotations
- [x] Arrays, Tuples & Enums
- [x] `any`, `unknown`, `never`, `void`

### Core Concepts
- [x] Union Types & `any`
- [x] Type Narrowing & Type Guards
- [x] Objects & Type Aliases
- [x] Interfaces & `extends`
- [x] Advanced Types — Intersection, Utility Types
- [x] Typed Functions — params, return types, optional & default

### Advanced
- [x] OOP — Classes, Access Modifiers (`public`, `private`, `protected`)
- [x] Generics — functions, interfaces, classes
- [x] Web Requests with TypeScript
- [x] Typed Fetch Requests
- [x] TypeScript with React (TSX)
- [x] Custom Typed Hooks

---

## 🚀 React + TypeScript Project

> Located in `react-ts/` — a Vite + React + TypeScript app

### Components Built

| Component | Concepts Used |
|-----------|--------------|
| `Card.tsx` | Typed props interface |
| `ChaiCard.tsx` | Optional props, default values |
| `ChaiList.tsx` | Array types, mapped components |
| `Counter.tsx` | `useState<T>` typed hook |
| `OrderFrom.tsx` | Typed form events, `React.FormEvent` |
| `useFetch.ts` | Generic custom hook, typed API response |
| `types.ts` | Shared type definitions across components |

---

## 🛠️ Running the Code

### Core TypeScript files
```bash
# Clone the repo
git clone https://github.com/prabhatyadav4/typescript-bootcamp.git
cd typescript-bootcamp

# Install dependencies
npm install

# Compile a file
npx tsc src/01_index.ts

# Or run directly with ts-node
npx ts-node src/01_index.ts
```

### React + TypeScript project
```bash
cd react-ts
npm install
npm run dev
```

---

## ⚡ Key Learnings

```ts
// 1. Type Annotations
const name: string = "Prabhat"
const age: number = 20

// 2. Interfaces
interface User {
    name: string
    email: string
    age?: number   // optional
}

// 3. Union Types
type ID = string | number

// 4. Generics
function getFirst<T>(arr: T[]): T {
    return arr[0]
}

// 5. Typed React Props
interface CardProps {
    title: string
    description: string
    onClick: () => void
}
```

---

## ⚡ Why TypeScript?

| JavaScript | TypeScript |
|-----------|------------|
| Dynamic typing | Static typing |
| Errors at runtime | Errors at compile time |
| No IDE autocomplete for types | Full IntelliSense support |
| Hard to maintain large codebases | Scalable & self-documenting |
| No interfaces or generics | Full OOP + generics support |

> 💡 TypeScript is just JavaScript with superpowers — it compiles down to plain JS!

---

## 📺 Course Reference

> 📺 **Playlist:** [Chai aur TypeScript — YouTube](https://youtube.com/playlist?list=PLu71SKxNbfoBkkr8lblqtsJvxrw3j1tWC)
> 👨‍💻 **Instructor:** [Hitesh Choudhary](https://github.com/hiteshchoudhary)

---

## 🔗 My Other Bootcamps

| Repo | Description | Status |
|------|-------------|--------|
| [js-bootcamp](https://github.com/prabhatyadav4/js-bootcamp) | JavaScript fundamentals | ✅ Completed |
| [react-bootcamp](https://github.com/prabhatyadav4/react-bootcamp) | React — Hooks, Redux, Appwrite | ✅ Completed |
| [typescript-bootcamp](https://github.com/prabhatyadav4/typescript-bootcamp) | TypeScript — Core + React TS | ✅ Completed |

---

## 👨‍💻 Connect

**Prabhat Kumar** — CSE Student

<a href="https://github.com/prabhatyadav4">
  <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
</a>
<a href="https://www.linkedin.com/in/prabhat-kumar-95059531a">
  <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>

---

<div align="center">

⭐ **Star this repo if you find it helpful!**

*Completed in 26 days with 🔷 TypeScript and lots of ☕ chai*

</div>