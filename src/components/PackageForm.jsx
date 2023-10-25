const PackageForm = ({ handleChangePackage, newPackage }) => {
  return (
    <div>
      <h3>Add A Package</h3>
      <label className="label">Price:</label>
      <input
        className="input"
        type="number"
        value={newPackage.price}
        onChange={handleChangePackage}
        name={'price'}
        placeholder={'price'}
      />
      <label className="label">Tier:</label>
      <input
        className="input"
        type="text"
        value={newPackage.tier}
        onChange={handleChangePackage}
        name={'tier'}
        placeholder={'tier'}
      />
      <label className="label">Description:</label>
      <input
        className="input"
        type="text-area"
        value={newPackage.description}
        onChange={handleChangePackage}
        name={'description'}
        placeholder={'description'}
      />
    </div>
  )
}

export default PackageForm
