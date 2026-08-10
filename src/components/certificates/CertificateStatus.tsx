interface Props {
  status: string;
}

export default function CertificateStatus({ status }: Props) {

  const styles = {
    Completed: "bg-green-500/15 text-green-700 dark:text-green-400 border-green-500/20",

    "In Progress": "bg-yellow-500/15 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",

    Planned: "bg-orange-500/15 text-orange-700 dark:text-orange-400 border-orange-500/20",
  };

  return (
    <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-semibold ${styles[status as keyof typeof styles]}`}>
      <span className="h-2 w-2 rounded-full bg-current animate-pulse" />
      {status}
    </div>
  );
}