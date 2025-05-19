import getConfig from "next/config";

export const getBasePath = () => {
  if (typeof window !== "undefined") {
    return document.querySelector("base")?.getAttribute("href") || "";
  }

  const config = getConfig();
  return config.basePath || "";
};
