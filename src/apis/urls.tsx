const baseurl = "https://quizziebackend-y1x1.onrender.com/api/v1";

export const urls = {
  getfiles: (page: Number) => `${baseurl}/files?page=${page}`,
  groupedFiles: `${baseurl}/files-grouped`,
  getFilesbyLabel: (label: string) => `${baseurl}/files/${label}`,
};
