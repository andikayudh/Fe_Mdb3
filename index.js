const handleCheckChange = (
    checked: boolean,
    object_id: string,
    existingLabels: string[],
    channel:number,
  )  {
    if (checked) {
      setSelectedRows([...selectedRows, object_id]);
      const newTemp = [...existingLabels];
      setTempLabel(newTemp);
      onSelectedPostChannel(channel);
    } else {
      const newSelectedRows = selectedRows.filter((i) => i !== object_id);
      setSelectedRows(newSelectedRows);
      const newTemp = tempLabel.filter((e: any) => e.object_id !== object_id);
      setTempLabel(newTemp);
      onSelectedPostChannel(channel);
    }
  };

  console.log(channel);