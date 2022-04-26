import { PublicRootContent } from '../lib/public-root/public-root-content';
import { PublicRootHeader } from '../lib/public-root/public-root-header';

export function PublicRoot() {
  return (
    <>
      <PublicRootHeader />
      <PublicRootContent />
    </>
  );
}
