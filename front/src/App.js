import {
  useEffect,
  useState
} from 'react';
import Dashboard from './pages/Dashboard';

const API_KEY =
  process
    .env
    .REACT_APP_NEWSAPI_KEY;
const CATEGORIES =
  [
    'business',
    'entertainment',
    'general',
    'health',
    'science',
    'sports',
    'technology'
  ];
const BASE =
  'https://newsapi.org/v2/top-headlines';

export default function App() {
  const [
    category,
    setCategory
  ] =
    useState(
      'general'
    );
  const [
    query,
    setQuery
  ] =
    useState(
      ''
    );
  const [
    articles,
    setArticles
  ] =
    useState(
      []
    );
  const [
    loading,
    setLoading
  ] =
    useState(
      true
    );
  const [
    err,
    setErr
  ] =
    useState(
      ''
    );

  const load =
    async (
      cat,
      q
    ) => {
      setLoading(
        true
      );
      setErr(
        ''
      );
      try {
        let url = `${BASE}?country=us&category=${cat}&pageSize=20&apiKey=${API_KEY}`;
        if (
          q.trim() !==
          ''
        ) {
          url += `&q=${encodeURIComponent(
            q
          )}`;
        }
        const res =
          await fetch(
            url
          );
        const data =
          await res.json();
        if (
          data.status !==
          'ok'
        )
          throw new Error(
            data.message ||
              'Error'
          );
        setArticles(
          data.articles ||
            []
        );
      } catch (e) {
        setErr(
          e.message
        );
        setArticles(
          []
        );
      } finally {
        setLoading(
          false
        );
      }
    };

  useEffect(() => {
    load(
      category,
      query
    );
  }, [
    category,
    query
  ]);

  return (
    <Dashboard
      categories={
        CATEGORIES
      }
      category={
        category
      }
      setCategory={
        setCategory
      }
      query={
        query
      }
      setQuery={
        setQuery
      }
      articles={
        articles
      }
      loading={
        loading
      }
      err={
        err
      }
    />
  );
}
