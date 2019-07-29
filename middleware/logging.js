export default function ({ req }) {
  if (process.server) console.log(req)
}