import { useLocation } from "react-router-dom";
import { getFilesbyLabel } from "../apis/functions";
import { ImageViewer } from "../components";
import { Data } from "../utils/types";
import { useEffect, useMemo, useState } from "react";
import { CapitalizeWord } from "../utils/const";

export const FileViewByLabel = () => {
  const label = useLocation().pathname.split("/").pop() as string;
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{ label: string; data: Data[] }>({
    label: "",
    data: [],
  });
  //   const label: string = useLocation().state as string;
  const GetData = async () => {
    try {
      setLoading(true);
      const data = await getFilesbyLabel(label);
      setData(data);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    GetData();
  }, []);
  const stableData = useMemo(() => data, [data]);
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-center">
        File Grouped by {CapitalizeWord(label)}
      </h1>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <ImageViewer visibleData={stableData.data} />
      )}
    </div>
  );
};
