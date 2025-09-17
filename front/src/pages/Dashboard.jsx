import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Carousel from "../components/Carousel";

const Dashboard = () => {
  const newsData = [
    {
      date: "Sept 17, 2025",
      title: "Noticia 1",
      description: "Descripción breve de la noticia 1..."
    },
    {
      date: "Sept 2, 2025",
      title: "Noticia 2",
      description: "Descripción breve de la noticia 2..."
    },
    {
      date: "Agosto 30, 2025",
      title: "Noticia 3",
      description: "Descripción breve de la noticia 3..."
    },
    {
      date: "Agosto 20, 2025",
      title: "Noticia 4",
      description: "Descripción breve de la noticia 4..."
    },
    {
      date: "Julio 10, 2025",
      title: "Noticia 5",
      description: "Descripción breve de la noticia 5..."
    }
  ];

  return (
    <div className="dashboard">
      <Header />
      <SearchBar />
      <CategoryFilter />
      <Carousel news={newsData} />
    </div>
  );
};

export default Dashboard;
