import './TechWatch.scss';
import { dataSource } from '../../data/source';
import TechWatchCard from '../../components/TechWatchCard/TechWatchCard';

function TechWatch() {
    return (
        <section className="techwatch">
            <h1 className="page-title">Veille technologique</h1>

            <div className="techwatch_list">
                {dataSource.map((source) => (
                    <TechWatchCard key={source.name} data={source} />
                ))}
            </div>
        </section>
    );
}

export default TechWatch;