import GlassWindow from "./GlassWindow";
import MetricCard from "./MetricCard";
import TrafficGraph from "./TrafficGraph";
import TypingTerminal from "./TypingTerminal";
import LiveTopology from "./LiveTopology";
import SystemHealth from "./SystemHealth";
import Alerts from "./Alerts";
import Logs from "./Logs";

export default function Simulator(){

return(

<div className="space-y-8">

<div className="grid gap-6 xl:grid-cols-4">

<MetricCard title="CPU" value="36%"/>

<MetricCard title="RAM" value="58%"/>

<MetricCard title="Traffic" value="1.2Gbps"/>

<MetricCard title="Firewall" value="ONLINE"/>

</div>

<div className="grid gap-8 xl:grid-cols-2">

<GlassWindow title="Network Topology">

<LiveTopology/>

</GlassWindow>

<GlassWindow title="Traffic">

<TrafficGraph/>

</GlassWindow>

</div>

<GlassWindow title="System Health">

<SystemHealth/>

</GlassWindow>

<div className="grid gap-8 xl:grid-cols-2">

<GlassWindow title="Threat Alerts">

<Alerts/>

</GlassWindow>

<GlassWindow title="Activity Logs">

<Logs/>

</GlassWindow>

</div>

<GlassWindow title="Terminal">

<TypingTerminal/>

</GlassWindow>

</div>

);

}