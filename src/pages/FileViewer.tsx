import { ImageViewer } from "../components";
import { useEffect, useMemo, useState } from "react";
import { Data } from "../utils/types";
import { gefiles } from "../apis/functions";

export const FileViewer = () => {
  const [visibleData, setVisibleData] = useState<Data[]>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadMoreItems = async () => {
    if (loading) return;

    setLoading(true);
    try {
      const data = await gefiles(currentPage + 1);

      setVisibleData((prevData) => [
        ...prevData,
        ...data?.filter(
          (item: Data) => !prevData.some((prev) => prev.id === item.id)
        ),
      ]);
      setCurrentPage((prev) => prev + 1);
    } catch (err) {
      setError("Failed to load more items. Please try again later.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 100
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentPage, loading]);
  useEffect(() => {
    loadMoreItems();
  }, []);

  const stableData = useMemo(() => visibleData, [visibleData]);

  return (
    <div>
      {error && <div className="text-red-500 text-center">{error}</div>}
      <ImageViewer visibleData={stableData} />
      {loading && <div className="text-center">Loading more items...</div>}
    </div>
  );
};
