This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.




----------
ok but I cant use contenteditable then because there is no state? Or do i use it in tandem with something else? What data strcuture to hold state?


Great question — and you’re thinking about it in exactly the right way.

You **can** use `contentEditable`, **but you shouldn't rely on it to hold or track state**. Instead, you treat the DOM as a *view layer*, and build your own *model layer* underneath — much like React does with the virtual DOM.

---

### ✅ So yes, use `contentEditable`, **in tandem** with a document model.

It gives you:

* Rich user interaction for free (cursor, keyboard input, selection, etc.)
* But **you are responsible for maintaining the real state** elsewhere.

---

### 📦 What kind of data structure should you use to hold state?

Use a **tree-based model** — this is what most word processors do.

#### ✅ Example structure:

```ts
Document
├── Paragraph
│   ├── TextRun ("Hello", bold)
│   └── TextRun (" world", normal)
├── Paragraph
│   ├── TextRun ("Another line", italic)
```

This could be modeled as:

```ts
type TextRun = {
  text: string;
  styles: {
    bold?: boolean;
    italic?: boolean;
    underline?: boolean;
    // more...
  };
};

type Paragraph = {
  children: TextRun[];
  align?: "left" | "center" | "right";
};

type Document = Paragraph[];
```

---

### 🧠 How you use this in practice:

1. **On input (`onInput`, `onKeyDown`, etc.)**, read what changed.
2. **Update your internal state** (your document model).
3. Optionally: **re-render the `contentEditable` element** from your state if you want to keep full control — but for basic usage, you can let the user type freely and sync state every few keystrokes or interactions.
4. For more control (e.g., undo/redo), treat it like a **text editor with a diff/patch model** — reconcile the DOM and your state model manually.

---

### 📌 Summary:

* Use `contentEditable` **as a UI**, not as your source of truth.
* Maintain a structured internal model (a tree, typically).
* Keep the model and the DOM in sync.
* Eventually, for advanced features, you’ll intercept and override more DOM behaviors.

Let me know if you want to start building out a sample model or how to track changes efficiently.
