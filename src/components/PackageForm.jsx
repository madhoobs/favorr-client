const PackageForm = ({ handleChangePackage, newPackage }) => {
  return (
    <div>
      <h1>Add A Package</h1>
      <input
        type="number"
        value={newPackage.price}
        onChange={handleChangePackage}
        name={'price'}
        placeholder={'price'}
      />
      <input
        type="text"
        value={newPackage.tier}
        onChange={handleChangePackage}
        name={'tier'}
        placeholder={'tier'}
      />
      <input
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
