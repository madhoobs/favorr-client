const PackageForm = ({ handleChangePackage, newPackage }) => {
  return (
    <div>
      <br />
      <h4>Add Favor's Packages</h4>
      <label className="label">Package Price</label>
      <input
        className="input"
        type="number"
        value={newPackage.price}
        onChange={handleChangePackage}
        name={'price'}
        placeholder={'Enter service price (BHD)'}
        required
      />
      <label className="label">Package Tier</label>
      <input
        className="input"
        type="text"
        value={newPackage.tier}
        onChange={handleChangePackage}
        name={'tier'}
        placeholder={'Choose a tier name'}
        required
      />
      <label className="label">Package Description</label>
      <textarea
        className="input"
        type="text-area"
        value={newPackage.description}
        onChange={handleChangePackage}
        name={'description'}
        placeholder={'Enter a detailed description of this package'}
        required
      />
    </div>
  )
}

export default PackageForm
