import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { InstallationCsComponent } from '~/app/pages/(components)/components/installation-cs.component';
import { CodePreviewDirective } from '~/app/shared/code/code-preview.directive';
import { CodeComponent } from '~/app/shared/code/code.component';
import { MainSectionDirective } from '~/app/shared/layout/main-section.directive';
import { PageBottomNavPlaceholderComponent } from '~/app/shared/layout/page-bottom-nav-placeholder.component';
import { PageBottomNavLinkComponent } from '~/app/shared/layout/page-bottom-nav/page-bottom-nav-link.component';
import { PageBottomNavComponent } from '~/app/shared/layout/page-bottom-nav/page-bottom-nav.component';
import { PageNavLinkComponent } from '~/app/shared/layout/page-nav/page-nav-link.component';
import { PageNavComponent } from '~/app/shared/layout/page-nav/page-nav.component';
import { SectionIntroComponent } from '~/app/shared/layout/section-intro.component';
import { SectionSubHeadingComponent } from '~/app/shared/layout/section-sub-heading.component';
import { TabsComponent } from '~/app/shared/layout/tabs.component';
import { metaWith } from '~/app/shared/meta/meta.util';
import { defaultCode, defaultImports, defaultSkeleton, HoverCardPreviewComponent } from './hover-card.preview';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Hover Card' },
	meta: metaWith('spartan/ui - Hover Card', 'For sighted users to preview content available behind a link.'),
	title: 'spartan/ui - Hover Card',
};

@Component({
	selector: 'spartan-hover-card',
	standalone: true,
	imports: [
		MainSectionDirective,
		CodeComponent,
		SectionIntroComponent,
		SectionSubHeadingComponent,
		TabsComponent,
		CodePreviewDirective,
		PageNavLinkComponent,
		PageNavComponent,
		PageBottomNavComponent,
		PageBottomNavLinkComponent,
		PageBottomNavPlaceholderComponent,
		HoverCardPreviewComponent,
		InstallationCsComponent,
	],
	template: `
		<section spartanMainSection>
			<spartan-section-intro name="Hover Card" lead="For sighted users to preview content available behind a link." />

			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-hover-card-preview />
				</div>
				<spartan-code secondTab [code]="defaultCode" />
			</spartan-tabs>

			<spartan-section-sub-heading id="installation">Installation</spartan-section-sub-heading>
			<spartan-tabs class="mt-4" firstTab="Nx Plugin" secondTab="Manual">
				<spartan-code firstTab language="sh" code="npx nx g @spartan-ng/nx:ui hovercard" />
				<spartan-installation-cs secondTab />
			</spartan-tabs>

			<spartan-section-sub-heading id="usage">Usage</spartan-section-sub-heading>
			<div class="space-y-4">
				<spartan-code [code]="defaultImports" />
				<spartan-code [code]="defaultSkeleton" />
			</div>

			<spartan-page-bottom-nav>
				<spartan-page-bottom-nav-link href="input" label="Input" />
				<spartan-page-bottom-nav-link direction="previous" href="dropdown-menu" label="Dropdown" />
			</spartan-page-bottom-nav>
		</section>
		<spartan-page-nav>
			<spartan-page-nav-link fragment="installation" label="Installation" />
			<spartan-page-nav-link fragment="usage" label="Usage" />
		</spartan-page-nav>
	`,
})
export default class CardPageComponent {
	protected readonly defaultCode = defaultCode;
	protected readonly defaultSkeleton = defaultSkeleton;
	protected readonly defaultImports = defaultImports;
}