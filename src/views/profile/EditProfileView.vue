<script setup>
import { onMounted } from 'vue';
import useProfile from '../../composables/useProfile';
import EditProfileForm from '../../components/EditProfileForm.vue';
const props = defineProps({
    id: {
        type: String,
        required: true
    }
})
onMounted(() => {
    useProfile().getProfile(props.id)
})
const { profile } = useProfile();
</script>

<template>
     <div class="row pt-5 justify-content-center">
            <div class="col-md-8">
                <div class="card">
                <div class="card-header">Edit Profile</div>
                <div class="card-body">
                    <EditProfileForm :id="id" :profile="profile" />
                </div>
            </div>
        </div>
    </div>
</template>