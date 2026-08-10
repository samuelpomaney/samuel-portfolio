<defs>

  <linearGradient
    id="networkGradient"
    x1="0%"
    y1="0%"
    x2="100%"
    y2="100%"
  >

    <stop
      offset="0%"
      stopColor="rgba(253,158,4,.15)"
    />

    <stop
      offset="50%"
      stopColor="rgba(253,158,4,.6)"
    />

    <stop
      offset="100%"
      stopColor="rgba(253,158,4,.15)"
    />

  </linearGradient>

</defs>

interface Props {
  d: string;
}

export default function Connection({
  d,
}: Props) {
  return (
    <path
      d={d}
      fill="none"
      stroke="url(#networkGradient)"
      strokeWidth="2"
      strokeLinecap="round"
    />
  );
}