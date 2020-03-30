import axios from 'axios';
const INDO_URL = 'https://indonesia-covid-19.mathdro.id/api';
const URL_PROVINSI = 'https://indonesia-covid-19.mathdro.id/api/provinsi';
const LAST_UPDATE = 'https://covid19.mathdro.id/api';
const URL_BEKASI = 'http://corona.bekasikota.go.id./public/api/informasikelurahan/get';
const HOSPITAL = 'https://covid19-public.digitalservice.id/api/v1/sebaran/jabar/faskes';
const VIDEO = 'https://covid19-api.digitaltech.id/api/video';
const GLOBAL_DATA = 'https://covid19.mathdro.id/api/confirmed';
const BEKASI_RS = 'https://covid19-api.digitaltech.id/api/bekasi/rs';
const NEWS_TERKINI = 'https://covid19-api.digitaltech.id/api/news/info-terkini';
const FAQ_URL = 'https://covid19-api.digitaltech.id/api/faq';
const INDO_DAILY = 'https://indonesia-covid-19.mathdro.id/api/harian';

const getDataBekasi = async () => {
  const data = await axios(URL_BEKASI).then(response => response.data);
  return data;
};

const getDataIndo = async () => {
  const data = await axios(INDO_URL).then(response => response.data);
  return data;
};

const getDataProvinsi = async () => {
  const data = await axios(URL_PROVINSI).then(response => response.data);
  return data;
};

const getLastUpdate = async () => {
  const data = await axios(LAST_UPDATE).then(response => response.data);
  return data;
};

const getVideo = async () => {
  const data = await axios(VIDEO).then(response => response.data);
  return data;
};

const getGlobalData = async () => {
  const data = await axios(GLOBAL_DATA).then(response => response.data);
  return data;
};

const getJabarRs = async () => {
  const data = await axios(HOSPITAL).then(response => response.data);
  return data;
};

const getBekasiRs = async () => {
  const data = await axios(BEKASI_RS).then(response => response.data);
  return data;
};

const getNewsTerkini = async () => {
  const data = await axios(NEWS_TERKINI).then(response => response.data);
  return data;
};

const getFaqData = async () => {
  const data = await axios(FAQ_URL).then(response => response.data);
  return data;
};

const getDaily = async () => {
  const data = await axios(INDO_DAILY).then(response => response.data);
  return data;
};

export {
  getDataBekasi,
  getDataIndo,
  getDataProvinsi,
  getLastUpdate,
  getVideo,
  getGlobalData,
  getJabarRs,
  getBekasiRs,
  getNewsTerkini,
  getFaqData,
  getDaily,
};
