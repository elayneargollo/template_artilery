module.exports = {
  generateData: generateData,
  sortVideoId: sortVideoId
};

function generateData(requestParams, context, ee, next) {

  let year = getRandomYear(2018, 2023);

  const videoName = sortNameVideo(requestParams, context, ee, next);

  const page = Math.floor(Math.random() * 3);
  const size = Math.floor(Math.random() * 21) + 10;
  const filteredByVideoName = Math.random() < 0.5;

  context.vars["page"] = page;
  context.vars["size"] = size;
  context.vars["initialPeriod"] = year + "-01-01";
  context.vars["finalPeriod"] = year + "-12-31";
  context.vars["filteredByVideoName"] = filteredByVideoName;
  context.vars["videoName"] = videoName;

  if (videoName !== "") {
    context.vars["filteredByVideoName"] = true;
  }

  return next();
}

function getRandomYear(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function sortNameVideo(requestParams, context, events, next) {
  const videosName = ["TikTock", "Youtube", ""];

  const index = Math.floor(Math.random() * videosName.length);
  return videosName[index];
}

function getRandomDate(start, end) {
  const date = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return date.toISOString().split('T')[0];
}

function sortVideoId(requestParams, context, events, next) {
  
  const idsVideo = [41, 87, 34, 12, 11, 29];
    
  const index = Math.floor(Math.random() * idsVideo.length );
  context.vars["idVideo"] = idsVideo[index];

  return next();
}