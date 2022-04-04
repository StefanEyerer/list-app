import { CreateListContent } from '../lib/create-list/create-list-content';
import { CreateListHeader } from '../lib/create-list/create-list-header';

export function CreateList() {
  return (
    <>
      <CreateListHeader />
      <CreateListContent />
    </>
  );
}

CreateList.auth = true;
