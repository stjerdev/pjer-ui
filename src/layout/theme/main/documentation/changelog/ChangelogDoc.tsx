import { Grid } from "@material-ui/core"
import React from "react"
import ChangelogCard from "./ChangelogCard"
import changelogDataMPF from "./changelogDataMPF"
import changelogDataSTJ from "./changelogDataSTJ"

let changelogData
{
  switch (process.env.NEXT_PUBLIC_REALM) {
    case "mpf":
      changelogData = changelogDataMPF
      break
    case "mpd":
      changelogData = changelogDataMPF
      break
    case "stj":
      changelogData = changelogDataSTJ
      break
    default:
      changelogData = [{}]
      break
  }
}

function ChangelogDoc() {
  return (
    <>
      {changelogData.map((item) => (
        <Grid spacing={1} style={{ padding: "1%" }}>
          <ChangelogCard className="mb-24" key={item.version} {...item} />
        </Grid>
      ))}
    </>
  )
}

export const fuseReactLatestVersion = changelogData[0].version

export default ChangelogDoc
