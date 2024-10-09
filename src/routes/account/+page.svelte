<script lang="ts">
	export let data: { user: { firstName: string; lastName: string; email: string } };
	import { Button } from "$lib/components/ui/button";
	import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "$lib/components/ui/card";
	import { Input } from "$lib/components/ui/input";
	import { Label } from "$lib/components/ui/label";
</script>
  
  <div class="container mx-auto py-10">
	<h1 class="text-3xl font-bold mb-6">Account Settings</h1>
	<div class="grid gap-6">
	  <Card>
		<CardHeader>
		  <CardTitle>Personal Information</CardTitle>
		  <CardDescription>Update your personal details here.</CardDescription>
		</CardHeader>
		<CardContent class="space-y-4">
		  <div class="grid grid-cols-2 gap-4">
			<div class="space-y-2">
			  <Label for="firstName">First name</Label>
			  <Input id="firstName" placeholder="John" value={data.user.firstName} />
			</div>
			<div class="space-y-2">
			  <Label for="lastName">Last name</Label>
			  <Input id="lastName" placeholder="Doe" value={data.user.lastName} />
			</div>
		  </div>
		  <div class="space-y-2">
			<Label for="email">Email</Label>
			<Input id="email" placeholder="john.doe@example.com" type="email" value={data.user.email} />
		  </div>
		</CardContent>
		<CardFooter>
		  <Button>Save Changes</Button>
		</CardFooter>
	  </Card>
  
	  <Card>
		<CardHeader>
		  <CardTitle>Delete Account</CardTitle>
		  <CardDescription>Permanently delete your account and all associated data.</CardDescription>
		</CardHeader>
		<CardContent>
		  <p class="text-sm text-muted-foreground">
			Once you delete your account, there is no going back. Please be certain.
		  </p>
		</CardContent>
		<CardFooter>
		  <form method="POST" action="/account/delete">
			<Button variant="destructive" type="submit">Delete Account</Button>
		  </form>
		</CardFooter>
	  </Card>
	</div>
  </div>