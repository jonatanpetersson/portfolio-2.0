let hasErrored = false;
const evtSource = new EventSource('/events');

evtSource.onopen = () => {
  if (hasErrored) location.reload();
  hasErrored = false;
};
evtSource.onerror = () => hasErrored = true;
