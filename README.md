# 3 Project features:

1. We can Added Course But can't added One course at more time
2. We can see our total taken credit and also the creadit we have Remain.
3. We can't Take credit more than 20.

# Discuss about managed the state in my assignment project:

### I was manage the state at 5 time. 
1. when i fetch json file. I was used # const [course, setCourse] = useState([]);
2. when i added total credit. I was used # const [counting, setCounting] = useState(0);
3. when i added remaining credit. I was used # const [remaining, setRemaining] = useState(0);
4. when i added total price of course. I was used # const [price, setPrice] = useState(0);
5. When i added the course name. I was used # const [selectCourse, setselectCourse] = useState([]);





# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
