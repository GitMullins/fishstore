import PropTypes from 'prop-types';

const inventoryShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  dateTime: PropTypes.number.isRequired,
  fishes: PropTypes.object.isRequired,
  uid: PropTypes.string.isRequired,
});

export default { inventoryShape };
