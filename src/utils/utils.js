/**
 * Regresa la coleccion de peces segun el hemisferio asignado.
 * @param {object} data - Recibe la coleccion de peces en formato RAW
 * @param {string} hemisphere - El hemisferio a seleccionar "North" o "South"
 */
function selectionOfSeason(data, hemisphere) {
  if (hemisphere !== 'South' && hemisphere !== 'North') {
    throw new Error(
      `Los valores posibles son "North" y "South" - Valor utilizado ${hemisphere}"`
    );
  }
  return data.map((fish) => {
    return {
      ...fish,
      seasons: hemisphere === 'North' ? fish.seasons.North : fish.seasons.South,
    };
  });
}

/**
 * Regresa la coleccion de peces segun el mes Asignado
 * @param {object} data - Recibe la coleccion de peces en formato RAW
 * @param {string} month - El mes a seleccionar tipo de dato month
 */
function fishesSeasonal(data, month) {
  return data.filter((fish) => {
    return fish.seasons[0].some((val) => val === month || val === 'All year');
  });
}

/**
 * Regresa la lista de peces los cuales dejan de aparecer el siguiente mes.
 * @param {object} data - Recibe la coleccion de peces en formato RAW
 * @param {string} month - El mes a seleccionar tipo de dato month
 */
function lastChanceToFishing(data, month) {
  return data.filter((fish) => {
    return fish.seasons[0][fish.seasons[0].length - 1] === month;
  });
}

export { selectionOfSeason, fishesSeasonal, lastChanceToFishing };
