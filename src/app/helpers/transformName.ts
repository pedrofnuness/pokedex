const transformName = (name: string) => {
  return name.charAt(0).toUpperCase() + name.slice(1);
};

export default transformName;