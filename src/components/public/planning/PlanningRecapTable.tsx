import { TeamWithPlayers } from "@/types";
import { CATEGORY_STYLES, buildRecapRows, makeTeamLabelResolver, type CategoryKey } from "@/lib/planning";
import s from "./PlanningRecapTable.module.scss";

export function PlanningLegend() {
    const keys = Object.keys(CATEGORY_STYLES) as CategoryKey[];
    return (
        <div className={s.legend}>
            <span className={s.legendTitle}>Légende :</span>
            {keys.map((key) => (
                <div key={key} className={s.legendItem}>
                    <div className={s.legendColor} style={{ backgroundColor: CATEGORY_STYLES[key].color }} />
                    <span>{CATEGORY_STYLES[key].label}</span>
                </div>
            ))}
        </div>
    );
}

interface Props {
    teams: TeamWithPlayers[];
}

export function PlanningRecapTable({ teams }: Props) {
    const teamLabel = makeTeamLabelResolver(teams);
    const recapRows = buildRecapRows();

    return (
        <>
            <div className={s.tableWrapper}>
                <table className={s.recapTable}>
                    <thead>
                        <tr>
                            <th>Jour</th>
                            <th>Horaires</th>
                            <th>Lieu</th>
                            <th>Équipe(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recapRows.map((row, index) => {
                            const label = teamLabel(row.slot.teamIds);
                            if (!label) return null;
                            const style = CATEGORY_STYLES[row.slot.category];
                            return (
                                <tr key={index}>
                                    <td className={s.dayCell}>{row.day}</td>
                                    <td>{row.time}</td>
                                    <td>
                                        <span
                                            className={`${s.siteBadge} ${row.site.id === "koenig" ? s.siteBadgeKoenig : s.siteBadgePont}`}
                                        >
                                            {row.site.id === "koenig" ? "Espace Koenig" : "Île du Pont"}
                                        </span>
                                    </td>
                                    <td className={s.categoryCell}>
                                        <div className={s.colorTag} style={{ backgroundColor: style.color }} />
                                        {label}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>

            <PlanningLegend />
        </>
    );
}
