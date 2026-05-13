// Day 246: Validation logic
function validateStudent(data) {
  if (!data.name || data.name.length < 2) return 'Name too short';
  if (!/^[6-9]\d{9}$/.test(data.mobile)) return 'Invalid 10-digit Indian mobile';
  return null;
}
console.log("Validation test:", validateStudent({ name: 'Kushal', mobile: '9876543210' }));
