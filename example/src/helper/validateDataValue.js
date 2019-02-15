function validateDataValue(dataValue) {
  if (dataValue !== 'empty') {
    return dataValue;
  }
  return null;
}

export default validateDataValue;
