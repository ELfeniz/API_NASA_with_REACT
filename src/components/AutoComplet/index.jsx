
import PropTypes from 'prop-types';

AutoComplet.propTypes = {

  dat: PropTypes.array,
  ID: PropTypes.array,
  busq: PropTypes.string,
  cambio: PropTypes.func,
  autocomplet: PropTypes.string,
  cambio2: PropTypes.func


};

export function AutoComplet ({ dat, ID, busq, cambio, autocomplet, cambio2 }) {


    function Busqueda() {

        if (busq.length >= 3) {

            if ((dat.filter((item) => item.toLowerCase().includes(busq.trim().toLowerCase()))).length > 0) {
                if ((dat.filter((item) => item.toLowerCase().includes(busq.trim().toLowerCase()))).length < 3) {
                    return (
                        <div className={`modal ${autocomplet && 'conten1-open2'}`}>
                            <ul className="list-items4">
                                {dat.filter((item) =>
                                    item.toLowerCase().includes(busq.trim().toLowerCase()))
                                    .slice(0, 5)
                                    .map((item) => <li className="item-3" key={item} onClick={() => cambio(`${item}`)}>
                                        <span className="item-text">{item}</span>
                                    </li>)}
                            </ul>
                        </div>

                    )
                } else {
                    return (
                        <div className={`modal ${autocomplet && 'conten1-open3'}`}>
                            <ul className="list-items4">
                                {dat.filter((item) =>
                                    item.toLowerCase().includes(busq.trim().toLowerCase()))
                                    .slice(0, 5)
                                    .map((item) => <li className="item-3" key={item} onClick={() => cambio(`${item}`)}>
                                        <span className="item-text">{item}</span>
                                    </li>)}
                            </ul>
                        </div>

                    )
                }

            }
        }
    }
    return (
        <Busqueda />
    )
}
