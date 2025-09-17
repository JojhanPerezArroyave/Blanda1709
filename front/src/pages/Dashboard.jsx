import React from "react";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import Carousel from "../components/Carousel";

const Dashboard = ({ categories, category, setCategory, query, setQuery, articles, loading, err }) => {
  return (
    <div className="dashboard">
      <Header />

      <SearchBar query={query} setQuery={setQuery} />
      <CategoryFilter categories={categories} category={category} setCategory={setCategory} />

      {loading && <p>Loading…</p>}
      {err && <p style={{ color: "crimson" }}>Error: {err}</p>}

      <Carousel news={articles} />
    </div>
  );
};

export default Dashboard;
