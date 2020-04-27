import humanize from "humanize-duration";

const timeDuration = (date) =>
  humanize(new Date() - new Date(date), {
    largest: 1,
    round: true,
    units: ["d", "h", "m"],
  });

export default timeDuration;
