import { Outlet } from "react-router-dom";
import styles from "./Projects.module.css"

const Projects = () => {
  return (
    <div>
      
      <h1 className={styles.title}>Proyectos🔨</h1>
      <Outlet/>
    </div>
  )
}

export default Projects;
