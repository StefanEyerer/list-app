export default function config(_, res) {
  return res.status(200).json({ apiUrl: process.env['NX_API_URL'] });
}
