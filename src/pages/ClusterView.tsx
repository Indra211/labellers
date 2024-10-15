import { GridView } from "../components/GridView";
import { getgroups } from "../apis/functions";
import { useEffect, useMemo, useState } from "react";
import { CapitalizeWord } from "../utils/const";

export const ClusterView = () => {
  const [data, setData] = useState<{ label: string[]; data: any }>({
    label: [],
    data: [],
  });
  const [loading, setLoading] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState<string[]>([]);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getgroups();
      setData(data);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  const stableData = useMemo(() => data, [data]);
  return (
    <div>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <>
          <h2 className="text-sm font-normal text-center">Filter By</h2>
          <div className="flex flex-wrap mb-4">
            {stableData?.label?.map((label) => (
              <button
                key={label}
                onClick={() =>
                  setSelectedLabel((prev) =>
                    prev.some((p) => p === label)
                      ? prev.filter((p) => p !== label)
                      : [...prev, label]
                  )
                }
                className={`text-xs font-medium  rounded-lg p-2 m-1 ${
                  selectedLabel?.length > 0 && selectedLabel?.includes(label)
                    ? "bg-red-400 text-white"
                    : "bg-slate-200"
                }`}
              >
                {CapitalizeWord(label)}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {(selectedLabel?.length > 0
              ? selectedLabel
              : stableData?.label
            )?.map((label) => (
              <GridView
                key={label}
                data={stableData?.data?.[label]}
                label={label}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
