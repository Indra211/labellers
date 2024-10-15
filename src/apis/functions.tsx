import { urls } from "./urls";

export const gefiles = async (page: Number) => {
  try {
    const res = await fetch(urls.getfiles(page || 1), {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
export const getgroups = async () => {
  try {
    const res = await fetch(urls.groupedFiles, {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};

export const getFilesbyLabel = async (label: string) => {
  try {
    const res = await fetch(urls.getFilesbyLabel(label), {
      method: "GET",
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
