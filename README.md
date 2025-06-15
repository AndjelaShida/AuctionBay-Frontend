# AuctionBay-Frontend

This is a full-stack auction web application that allows registered users to create, manage, and participate in auction events. Sellers can create auction events with images, descriptions, prices, and durations. Bidders can place bids and view the current status of their bids. The highest bid at the end of the auction wins the item.

## Technologies Used

- Frontend: React, TypeScript, CSS  
- Backend: Node.js, NestJS, Express, PostgreSQL  
- Database ORM: Prisma  
- Authentication: JWT  
- Hosting: AWS  
- Testing: Jest, Postman  
- Version Control: GitHub, Git

---

## Additional Info

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh  
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
